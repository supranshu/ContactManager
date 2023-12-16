package com.contactmanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.contactmanager.model.Contact;

import jakarta.transaction.Transactional;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Long> {

	public Contact getContactByName(String name);
	@Modifying
    @Transactional
    @Query("DELETE FROM Contact c WHERE c.name = :name")
    void deleteContactByName(String name);
} 
