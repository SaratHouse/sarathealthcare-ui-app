// src/emails/NotificationEmailTemplate.tsx
import * as React from 'react';
import { Html, Head, Preview, Body, Container, Text } from '@react-email/components';

export const NotificationEmailTemplate = ({
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
