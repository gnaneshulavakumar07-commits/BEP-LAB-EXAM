import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

function App() {
  const [submittedData, setSubmittedData] = useState<UserData | null>(null);

  const handleFormSubmit = (data: UserData) => {
    setSubmittedData(data);
  };

  const handleBack = () => {
    setSubmittedData(null);
  };

  return (
    <AppContainer>
      <Header>React Form Application</Header>
      {submittedData ? (
        <UserDetails userData={submittedData} onBack={handleBack} />
      ) : (
        <UserForm onSubmit={handleFormSubmit} />
      )}
    </AppContainer>
  );
}

export default App;
