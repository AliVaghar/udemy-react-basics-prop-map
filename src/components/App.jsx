import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function Heading() {
  return <h1 className="heading">My Contacts</h1>;
}

function CreateCard(contact) {
  return (
    <Card
      key={contact.id} // it's better to pass a unique key
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
      imgSrc={contact.imgURL}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      {contacts.map(CreateCard)};
      {/* <Card
        name={contacts[0].name}
        phone={contacts[0].phone}
        email={contacts[0].email}
        imgSrc={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        phone={contacts[1].phone}
        email={contacts[1].email}
        imgSrc={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        phone={contacts[2].phone}
        email={contacts[2].email}
        imgSrc={contacts[2].imgURL}
      /> */}
    </div>
  );
}

export default App;
