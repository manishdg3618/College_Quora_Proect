package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Answers;
import com.app.pojo.Questions;

public interface AnswerRepository extends JpaRepository<Answers, Integer>{
List<Answers> findByQue(Questions q);
 void deleteByQue(Questions q);
}
