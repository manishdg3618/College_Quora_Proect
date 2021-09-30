package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AnswerRepository;
import com.app.dao.QuestionRepository;
import com.app.pojo.Questions;

@Service
@Transactional
public class QuestionsServiceImpl implements IQuestionsService {

	@Autowired
	private QuestionRepository questionRepo;
	@Autowired
	private AnswerRepository answerRepo;
	@Override
	public List<Questions> getAllQuestions() {
		List<Questions> list = questionRepo.findAll();
		return list;
	}
	@Override
	public Questions addNewQuestion(Questions question) {
	
		return questionRepo.save(question);
	}
	@Override
	public void deleteQuestion(Questions id) {
		questionRepo.deleteById(id.getId());
		
	}

}
