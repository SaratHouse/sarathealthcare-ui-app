const React = require('react');
const { Html, Head, Preview, Body, Container, Text } = require('@react-email/components');

const NotificationEmailTemplate = ({
  applicantName,
  applicantId,
  position
}) => {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(Preview, null, 'New Job Application Received'),
    React.createElement(
      Body,
      null,
      React.createElement(
        Container,
        null,
        React.createElement(Text, null, '📩 New application received'),
        React.createElement(Text, null, `Applicant ID: ${applicantId}`),
        React.createElement(Text, null, `Applicant Name: ${applicantName}`),
        React.createElement(Text, null, `Position: ${position}`),
        React.createElement(Text, null, 'You can view the application in your admin panel.'),
      )
    )
  );
};

module.exports = { NotificationEmailTemplate };