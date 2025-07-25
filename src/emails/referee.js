const React = require('react');
const { Html, Head, Preview, Body, Container, Text, Link } = require('@react-email/components');

const RefereeEmailTemplate = ({
  type,
  applicantName,
  refereeName,
  position,
  link
}) => {
  const displayType = type.charAt(0).toUpperCase() + type.slice(1);
  
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, `${applicantName} has requested a ${displayType} reference`),
    React.createElement(
      Body,
      null,
      React.createElement(
        Container,
        null,
        React.createElement(Text, null, `Hello ${refereeName},`),
        React.createElement(Text, null, 
          `We are currently processing job application from ${applicantName} for the position of ${position} at Sarat Healthcare Ltd. As they have listed you as a ${displayType} referee, we will be grateful if you could kindly provide your insights regarding their ${displayType} and suitability for this role.`
        ),
        React.createElement(Text, null, 
          'Kindly click ',
          React.createElement(Link, { href: link }, 'here'),
          ' to complete the reference form.'
        ),
        React.createElement(Text, null, 
          'Please be assured that all information provided will be treated in the strictest confidence and used solely for recruitment purposes.'
        ),
        React.createElement(Text, null, 'Thank you for your time'),
        React.createElement(Text, null, 'Sarat Healthcare Team')
      )
    )
  );
};

module.exports = { RefereeEmailTemplate };