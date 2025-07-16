const React = require('react');
const { Html, Head, Preview, Body, Container, Text, Link } = require('@react-email/components');

const RefereeEmailTemplate = ({
  type,
  applicantName,
  refereeName,
  position,
  link
}: {
  type: 'professional' | 'character';
  applicantName: string;
  refereeName: string;
  position: string;
  link: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>{applicantName} has requested a {type} reference</Preview>
      <Body style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
        <Container>
          <Text>Dear {refereeName},</Text>
          <Text>
            We are currently processing an application from <strong>{applicantName}</strong> for the position of <strong>{position}</strong> at Sarat Healthcare Ltd. As they have listed you as a <strong>{type}</strong> referee, we would be most grateful if you could kindly provide your insights regarding their character and suitability for this role.
          </Text>
          <Text>
            To assist us in our assessment, we kindly ask that you complete the <strong>{type}</strong> reference form via the link below:
          </Text>
          <Link href={link}>{link}</Link>
            <Text> Please be assured that all information provided will be treated in the strictest confidence and used solely for recruitment purposes. </Text>
          <Text>Thank you for your time and kind assistance</Text>
          <Text>Kind regards</Text>
          <Text>Sarat Healthcare Team</Text>
        </Container>
      </Body>
    </Html>
  );
};

module.exports = { RefereeEmailTemplate };
