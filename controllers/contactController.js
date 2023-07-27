//@desc Create new contact
//@route POST /api/contacts
//@access publics  

const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
  };


//@desc Create new contact
//@route POST /api/contacts
//@access publics  
const createContact = (req, res) => {
    console.log(`The request body is ${req.body}`)
    res.status(201).json({ message: "Create contact" });
  }


//@desc Create new contact
//@route POST /api/contacts
//@access publics  
const getContacts = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
  }

//@desc Create new contact
//@route POST /api/contacts
//@access publics  
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
  }


//@desc Create new contact
//@route POST /api/contacts
//@access publics  
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
  }



module.exports = {
    getContact, createContact, deleteContact, updateContact, getContacts
}  