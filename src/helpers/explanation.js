export const explanation = props => {
  var first = '';
  var second = '';
  var third = '';
  var fourth = '';

  if (props.subjective === 'e') {
    first =
      'Extraverted types learn from talking and interacting with others. They like restaurant experiences that are fun and loud. ';
  } else {
    first =
      'Intoverted types regain energy through quiet reflection and privacy. They like intimate settings and candles. ';
  }
  if (props.objective === 's') {
    second =
      'As a Sensing type, you are present minded and prefer order and process. ';
  } else {
    second =
      'As an Intuitive type, you learn through association and pattern recognition. ';
  }
  if (props.deductive === 't') {
    third =
      'Thinking types make decisions based on logic and reasoning. You like restaurants that offer cohesive, thoughtful menus. ';
  } else {
    third =
      "You're also a Feeler, you use empathy to guide your decision making. You probably want to eat somewhere that emphasizes hospitality. ";
  }
  if (props.inductive === 'j') {
    fourth = 'As a Judgey person, you like information to be organized.';
  } else {
    fourth =
      "As a Perceptive person you like to get excited about stuff. We've given you restaurants that are weird.";
  }

  return first + second + third + fourth;
};
