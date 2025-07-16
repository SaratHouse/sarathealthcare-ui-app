const React = require('react');
const { Html, Head, Preview, Body, Container, Text } = require('@react-email/components');

const NotificationEmailTemplate = ({
  applicantName,
  position
}: {
  applicantName: string;
  position: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Job Application Received</Preview>
      <Body style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
        <Container>
          <Text>📩 New application received</Text>
          <Text>
            Applicant: <strong>{applicantName}</strong><br />
            Position: <strong>{position}</strong>
          </Text>
          <Text>You can view the application in your admin panel.</Text>
        </Container>
      </Body>
    </Html>
  );
};

module.exports = { NotificationEmailTemplate };