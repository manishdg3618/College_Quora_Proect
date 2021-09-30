package com.app.pojo;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user_tbl")
public class User extends BaseEntity {
	@Column( name = "f_name",length = 30)
	private String firstName;
	@Column(name = "l_name",length = 30)
	private String lastName;
	@Column(length = 50, unique = true ,nullable = false)
	private String email;
	@Column(length = 10, unique = true ,nullable =  false)
	private String passwd;
	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private Role role;
	@Column(length = 10)
	private String contact;
	@OneToMany(mappedBy = "user",cascade = CascadeType.REMOVE)
	private List<Questions> questions;
	@OneToMany(mappedBy = "user",cascade = CascadeType.REMOVE)
	private List<Answers> answers;

	public User() {
		
		// TODO Auto-generated constructor stub
	}

	

	public User(String firstName, String lastName, String email, String passwd, Role role, String contact) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.passwd = passwd;
		this.role = role;
		this.contact = contact;
	}



	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public String getContact() {
		return contact;
	}

	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
	}



	public void setContact(String contact) {
		this.contact = contact;
	}

	@Override
	public String toString() {
		return "Student [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", contact="
				+ contact + "]";
	}

}
