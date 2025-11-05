import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
`;

const DetailItem = styled.div`
  margin: 15px 0;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

const Value = styled.span`
  color: #666;
`;

const BackButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #45a049;
  }
`;

interface UserDetailsProps {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onBack: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userData, onBack }) => {
  return (
    <DetailsContainer>
      <h2>Registration Details</h2>
      <DetailItem>
        <Label>First Name:</Label>
        <Value>{userData.firstName}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Last Name:</Label>
        <Value>{userData.lastName}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Email:</Label>
        <Value>{userData.email}</Value>
      </DetailItem>
      <DetailItem>
        <Label>Phone:</Label>
        <Value>{userData.phone}</Value>
      </DetailItem>
      <BackButton onClick={onBack}>Back to Form</BackButton>
    </DetailsContainer>
  );
};

export default UserDetails;