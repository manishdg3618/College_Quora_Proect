package com.app.pojo;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "answer_tbl")
public class Answers extends BaseEntity {
	@Column(length = 1000)
	private String answer;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "que_id")
	private Questions que;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User user;
	@Column(name ="date")
	LocalDate date = LocalDate.now();
	
	public Answers() {
		// TODO Auto-generated constructor stub
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}



	public Questions getQue() {
		return que;
	}

	public void setQue(Questions que) {
		this.que = que;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	

}
