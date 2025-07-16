const React = require('react');
const { Html, Head, Preview, Body, Container, Text } = require('@react-email/components');

const NotificationEmailTemplate = ({
  applicantName,
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
        React.createElement(Text, null, 
          `We are currently processing an application from ${applicantName} for the position of ${position} at Sarat Healthcare Ltd. As they have listed you as a ${type} referee, we would be most grateful if you could kindly provide your insights regarding their character and suitability for this role.`
        ),
        React.createElement(Text, null, `Applicant: ${applicantName}`),
        React.createElement(Text, null, `Position: ${position}`),
        React.createElement(Text, null, 'You can view the application in your admin panel.'),
      )
    )
  );
};

module.exports = { NotificationEmailTemplate };