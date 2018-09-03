import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import CollapseButton from '../CollapseButton/CollapseButton';
import Card from '../Card/Card';
import CardModal from '../CardModal/CardModal';
import {mapObjectToArray} from '../../utils';
import url from '../../firebase';

/**
 * List is a stateful component which renders a list containing cards
 */
class List extends Component {
  /** Manage cards, activeCard and modal */
  state = {
    cards: null,
    activeCard: null,
    modal: false
  };

  /** Fetch all cards belonging to the list */
  async componentDidMount() {
    /** Fetch cards */
    const cardsResponse = await fetch(
      `${url}/cards.json?orderBy="listId"&equalTo="${this.props.list.id}"`
    );
    const cards = await cardsResponse.json();

    /** Set State of cards */
    this.setState({cards: mapObjectToArray(cards)});
  }

  /**
   * Create a new card
   * @param {string} title - Title of the new card
   */
  onCreate = async title => {
    /** Create list if title is not empty */
    if (title.trim()) {
      /** Copy old cards */
      const oldCards = [...this.state.cards];
      /** Store listId */
      const listId = this.props.list.id;

      /** Create new card */
      const card = {
        title,
        listId,
        description: '',
        checklists: []
      };

      /** POST new card to API and store it */
      const response = await fetch(`${url}/cards.json`, {
        method: 'post',
        body: JSON.stringify({...card})
      });
      const jsonResponse = await response.json();

      /** Merge oldCards with the new card */
      const cards = [...oldCards, {...card, id: jsonResponse.name}];
      /** Set state of cards */
      this.setState({cards});
    }
  };

  /**
   * Add a description to a card
   * @param {string} description - Description to add
   */
  addDescription = async description => {
    /** Copy old props of activeCard and add description to it */
    const activeCard = {
      ...this.state.activeCard,
      description
    };

    /** Merge cards with new activeCard */
    const cards = this.state.cards.map(card => {
      if (card.id === activeCard.id) {
        return activeCard;
      }

      return card;
    });

    /** PUT card to API */
    await fetch(`${url}/cards/${activeCard.id}.json`, {
      method: 'put',
      body: JSON.stringify({...activeCard})
    });

    /** Set state of activeCard and cards */
    this.setState({activeCard, cards});
  };

  /**
   * Add a checklist to a card
   * @param {string} title - Title of the checklist
   */
  addChecklist = async title => {
    /** Only create checklist if title is not empty */
    if (title.trim()) {
      /** Add checklist to activeCard depending on whether there is already a checklist on activeCard or not */
      const activeCard = {
        ...this.state.activeCard,
        checklists: this.state.activeCard.checklists
          ? [
              ...this.state.activeCard.checklists,
              {
                id: this.state.activeCard.checklists.length + 1,
                title,
                items: []
              }
            ]
          : [
              {
                id: 1,
                title,
                items: []
              }
            ]
      };

      /** Merge cards with new activeCard */
      const cards = this.state.cards.map(card => {
        if (card.id === activeCard.id) {
          return activeCard;
        }

        return card;
      });

      /** PUT new card to API */
      await fetch(`${url}/cards/${activeCard.id}.json`, {
        method: 'put',
        body: JSON.stringify({...activeCard})
      });

      /** Set state of activeCard and cards */
      this.setState({activeCard, cards});
    }
  };

  /**
   * Toggle a checklist item
   * @param {number} - ID of checklist
   * @param {number} - ID of item
   */
  toggleItem = async (checklistId, itemId) => {
    /** Create new activeCard with new toggled item */
    const activeCard = {
      ...this.state.activeCard,
      checklists: this.state.activeCard.checklists.map(checklist => {
        if (checklist.id === checklistId) {
          return {
            ...checklist,
            items: checklist.items.map(item => {
              if (item.id === itemId) {
                return {...item, completed: !item.completed};
              }

              return item;
            })
          };
        }

        return checklist;
      })
    };

    /** Merge cards with new activeCard */
    const cards = this.state.cards.map(card => {
      if (card.id === activeCard.id) {
        return activeCard;
      }

      return card;
    });

    /** PUT new card to API */
    await fetch(`${url}/cards/${activeCard.id}.json`, {
      method: 'put',
      body: JSON.stringify({...activeCard})
    });

    /** Set state of activeCard and cards */
    this.setState({activeCard, cards});
  };

  /**
   * Add an item to a checklist
   * @param {number} id - ID of checklist
   * @param {string} name - Name of the new item
   */
  addItemToChecklist = async (id, name) => {
    /** Only create item if name is not empty */
    if (name.trim()) {
      /** Create new activeCard and add new item to the checklist */
      const activeCard = {
        ...this.state.activeCard,
        checklists: this.state.activeCard.checklists.map(checklist => {
          if (checklist.id === id) {
            return {
              ...checklist,
              items: [
                ...checklist.items,
                {id: checklist.items.length + 1, name, completed: false}
              ]
            };
          }

          return checklist;
        })
      };

      /** Merge cards with new activeCard */
      const cards = this.state.cards.map(card => {
        if (card.id === activeCard.id) {
          return activeCard;
        }

        return card;
      });

      /** PUT new card to API */
      await fetch(`${url}/cards/${activeCard.id}.json`, {
        method: 'put',
        body: JSON.stringify({...activeCard})
      });

      /** Set state of activeCard and cards */
      this.setState({activeCard, cards});
    }
  };

  /** Toggle the modal */
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  /**
   * Set an activeCard
   * @param {object} card - Card which should be active
   */
  setActiveCard = card => {
    this.setState({activeCard: card});
  };

  /**
   * Toggle modal and set an activeCard
   * @param {object} card - Card which should be active
   */
  toggleAndSetActive = card => {
    this.setActiveCard(card);
    this.toggleModal();
  };

  /** Render the cards depending on whether they are fetched or not */
  renderCards = () => {
    /** If cards are not fetched yet */
    if (!this.state.cards) {
      /** Show some loading text */
      return <p>Loading...</p>;
    }

    /** Map over cards and return a Card component for each card element */
    return this.state.cards.map(card => (
      <Card
        toggleAndSetActive={this.toggleAndSetActive}
        card={card}
        key={card.id}
      />
    ));
  };

  /** Render the modal depending on whether an activeCard is set or not */
  renderModal = () => {
    /** If there is an activeCard */
    if (this.state.activeCard) {
      /** Render modal */
      return (
        <CardModal
          card={this.state.activeCard}
          modal={this.state.modal}
          toggle={this.toggleModal}
          addDescription={this.addDescription}
          addChecklist={this.addChecklist}
          addItemToChecklist={this.addItemToChecklist}
          toggleItem={this.toggleItem}
        />
      );
    }
  };

  /**
   * Render list
   * @returns {JSX}
   */
  render() {
    return (
      <Col xs="2">
        <div className="bg-light rounded px-3 py-1">
          <h2 className="h4 my-2">{this.props.list.title}</h2>
          {this.renderCards()}
          <CollapseButton
            text="Add card..."
            id={this.props.id}
            clicked={this.onCreate}
          />
        </div>
        {this.renderModal()}
      </Col>
    );
  }
}

export default withRouter(List);
