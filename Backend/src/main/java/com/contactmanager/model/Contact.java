package com.contactmanager.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contact {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private String number;
	private String email;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Contact(long id, String name, String number, String email) {
		super();
		this.id = id;
		this.name = name;
		this.number = number;
		this.email = email;
	}
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Contact [id=" + id + ", name=" + name + ", number=" + number + ", email=" + email + "]";
	}
	
}
