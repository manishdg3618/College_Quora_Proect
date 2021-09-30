package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AnswerRepository;
import com.app.pojo.Answers;
import com.app.pojo.Questions;

@Service
@Transactional
public class AnswersServiceImpl implements IAnswersService {

	@Autowired
	private AnswerRepository answerRepo;
	@Override
	public List<Answers> getAnswerById(Questions q) {
		List<Answers> allAnswers = answerRepo.findByQue(q);
		return allAnswers;
	}
	@Override
	public Answers addAnswer(Answers answer) {
		
		return answerRepo.save(answer);
	}
	@Override
	public void deleteAnswer(Answers answer) {
		answerRepo.deleteById(answer.getId());
	}
	

}
