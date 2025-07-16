const React = require('react');
const { Html, Head, Preview, Body, Container, Text } = require('@react-email/components');

const NotificationEmailAltTemplateAlt = ({
  type,
  refereeName,
  applicantName,
  position
}) => {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, 'New Reference Received'),
    React.createElement(
      Body,
      null,
      React.createElement(
        Container,
        null,
        React.createElement(Text, null, '📩 New Reference received'),
        React.createElement(Text, null, `Referee: ${refereeName}`),
        React.createElement(Text, null, `Type: ${type}`),
        React.createElement(Text, null, `Applicant: ${applicantName}`),
        React.createElement(Text, null, `Position: ${position}`),
        React.createElement(Text, null, 'You can view the application in your admin panel.'),
      )
    )
  );
};

module.exports = { NotificationEmailAltTemplateAlt };