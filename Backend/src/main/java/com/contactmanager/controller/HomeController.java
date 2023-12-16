package com.contactmanager.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.contactmanager.model.Contact;
import com.contactmanager.repo.ContactRepo;



@RestController
@CrossOrigin("*")
public class HomeController {

	@Autowired
	private ContactRepo contactRepo;
	
	@PostMapping("/enter-contact")
	public Contact enterContact(@RequestBody Contact contact) throws Exception {
		if(contact!=null) {
			return this.contactRepo.save(contact);
		}
		else if(contact==this.contactRepo.getContactByName(contact.getName())) {
			throw new Exception("Contatct Already Exists");
		}
		else {
			throw new Exception();
		}
		
	}
	
	@GetMapping("/get-contacts")
	public List<Contact> getContact() {
		List<Contact> list=this.contactRepo.findAll();
		return list;
	}
	
	@DeleteMapping("/remove-contact/{name}")
    public void deleteUser(@PathVariable("name") String name){
        this.contactRepo.deleteContactByName(name);
    }
}
