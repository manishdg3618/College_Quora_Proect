package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Questions;

public interface QuestionRepository extends JpaRepository<Questions, Integer> {
void deleteByQuestion(Questions q);
}
