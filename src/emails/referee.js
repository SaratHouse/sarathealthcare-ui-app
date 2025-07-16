const React = require('react');
const { Html, Head, Preview, Body, Container, Text, Link } = require('@react-email/components');

const RefereeEmailTemplate = ({
  type,
  applicantName,
  refereeName,
  position,
  link}) => {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, `${applicantName} has requested a ${type} reference`),
    React.createElement(
      Body,
      null,
      React.createElement(
        Container,
        null,
        React.createElement(Text, null, `Hello ${refereeName},`),
        React.createElement(Text, null, 
          `We are currently processing an application from ${applicantName} for the position of ${position} at Sarat Healthcare Ltd. As they have listed you as a ${type} referee, we would be most grateful if you could kindly provide your insights regarding their character and suitability for this role.`
        ),
        React.createElement(Text, null, `To assist us in our assessment, we kindly ask that you complete the ${type} reference form via the link below:`),
        React.createElement(Link, { href: link }, link),
        React.createElement(Text, null, 'Please be assured that all information provided will be treated in the strictest confidence and used solely for recruitment purposes.'),
        React.createElement(Text, null, 'Thank you for your time and kind assistance'),
        React.createElement(Text, null, 'Kind regards'),
        React.createElement(Text, null, 'Sarat Healthcare Team'),
      )
    )
  );
};

module.exports = { RefereeEmailTemplate };
