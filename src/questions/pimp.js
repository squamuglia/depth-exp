import React, { Component } from 'react';
import PrevNext from '../components/prev-next';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

class Pimp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      selected: [],
      car: 'taurus'
    };
  }

  handleDrag = (e, ui) => {
    console.log('state', this.state);
    const id = parseInt(ui.node.id, 10);
    const newSelected = [...this.state.selected];

    if (this.state.car === 'taurus') {
      this.props.updateTrait('subjective', 'i');
      this.props.updateTrait('objective', 'n');
    } else if (this.state.car === 'bronco') {
      this.props.updateTrait('subjective', 'e');
      this.props.updateTrait('inductive', 'p');
    } else {
      this.props.updateTrait('deductive', 't');
      this.props.updateTrait('inductive', 'j');
    }

    if (ui.y > 90 && !newSelected.includes(id)) {
      newSelected.push(id);
      this.setState({
        ...this.state,
        selected: [...newSelected]
      });
    } else if (ui.y < 90 && newSelected.includes(id)) {
      let index = newSelected.indexOf(id);
      newSelected.splice(index, 1);
      this.setState({
        ...this.state,
        selected: [...newSelected]
      });
    }
  };

  carSelect = e => {
    this.setState({
      ...this.state,
      car: e.target.value
    });
    if (e.target.value === 'taurus') {
      this.props.updateTrait('subjective', 'i');
      this.props.updateTrait('objective', 'n');
    } else if (e.target.value === 'bronco') {
      this.props.updateTrait('subjective', 'e');
      this.props.updateTrait('inductive', 'p');
    } else {
      this.props.updateTrait('deductive', 't');
      this.props.updateTrait('inductive', 'j');
    }
  };

  carDisplay = () => {
    return (
      <div
        className={'x ' + this.state.car}
        style={{ height: '10rem', marginTop: '3rem' }}
      />
    );
  };

  render() {
    return (
      <div className="gutter f fw aic jcc fill abs">
        <div className="fa x m1 card">
          <div className="x">{this.props.question}</div>
          <p className="s4 mb0">Pimp this ride.</p>
          <p className="small">Be sure to view your options in the dropdown</p>
          <select
            className="mt1"
            onChange={this.carSelect}
            value={this.state.car}
          >
            <option value="taurus">Taurus</option>
            <option value="bronco">Bronco</option>
            <option value="aston">Aston</option>
          </select>

          <div className="x h-25 my1">
            <Draggable onDrag={this.handleDrag}>
              <div className="sq rel wheel z10 inline-block mr025" id="1" />
            </Draggable>
            <Draggable onDrag={this.handleDrag}>
              <div className="sq rel wheel z10 inline-block mr025" id="2" />
            </Draggable>
            <Draggable onDrag={this.handleDrag}>
              <div
                className="sq rel sixty-nine z10 inline-block mr025"
                id="3"
              />
            </Draggable>
            <Draggable onDrag={this.handleDrag}>
              <div
                className="sq rel skate-wheel z10 inline-block mr025"
                id="4"
              />
            </Draggable>
            <Draggable onDrag={this.handleDrag}>
              <div
                className="sq rel skate-wheel z10 inline-block mr025"
                id="5"
              />
            </Draggable>
            <Draggable onDrag={this.handleDrag}>
              <div className="sq rel antenna z10 inline-block mr025" id="6" />
            </Draggable>
            <Draggable onDrag={this.handleDrag}>
              <div className="sq rel nuts z10 inline-block mr025" id="7" />
            </Draggable>
            {this.carDisplay()}
          </div>
          <PrevNext show={this.state.selected.length} />
        </div>
      </div>
    );
  }
}

function msp(state) {
  return {
    question: state.question,
    spiciness: state.spiciness
  };
}

function mdp(dispatch) {
  return {
    updateTrait: (trait, score) => {
      dispatch({ type: 'UPDATE_TRAIT', trait: trait, payload: score });
    }
  };
}

export default connect(
  msp,
  mdp
)(Pimp);
