import * as React from 'react';
import { Html, Head, Preview, Body, Container, Text, Link } from '@react-email/components';

export const RefereeEmailTemplate = ({
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
            {applicantName} has applied for the position of <strong>{position}</strong> and has listed you as their {type} referee.
          </Text>
          <Text>
            Please complete the reference form using the secure link below:
          </Text>
          <Link href={link}>{link}</Link>
          <Text>Thank you,</Text>
          <Text>Sarat Healthcare Team</Text>
        </Container>
      </Body>
    </Html>
  );
};
