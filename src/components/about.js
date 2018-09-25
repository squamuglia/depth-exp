import React from 'react';

const About = props => {
  if (props.show) {
    return (
      <div className="yview xview f aic jcc abs z10 fade">
        <div className="mw-1 fa mxa z8 bg-white p1 scroll">
          <p className="s4">About</p>
          <p>
            Don't look outwardly for that fire new lunch spot, look inwardly.
          </p>
          <p>
            Fridge Freud uses state of the art psychometric analysis and
            questions I thought of spur of the moment to find what you want to
            eat.
          </p>
          <p>Here's our patent-pending process:</p>
          <p>1. We ask a series of weird interactive questions.</p>
          <p>
            2. Your responses are carefully correlated to our homebrew
            adaptation of the statistically-dubious Myers-Briggs personality
            system.
          </p>
          <p>
            3. Your personality type is queried against the Yelp Fusion API to
            handpick a selection of restaurants, one of which you will surely
            enjoy.
          </p>
        </div>
        <div
          className="fill abs z7 bg-black o-4"
          onClick={() => props.toggle('about')}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default About;
