package com.app.pojo;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "question_tbl")
public class Questions extends BaseEntity {
     @Column(name = "question",length = 500)
	private String question;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User user;
	@Column(name ="date")
	LocalDate date = LocalDate.now();
	@OneToMany(mappedBy = "que",cascade = CascadeType.REMOVE)
    private List<Answers> answers;
 
	public Questions() {
		// TODO Auto-generated constructor stub
	}

	public Questions(String question, int likes) {
		super();
		this.question = question;
		
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}



	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	@Override
	public String toString() {
		return "Questions [question=" + question + ", user=" + user + "]";
	}

}
