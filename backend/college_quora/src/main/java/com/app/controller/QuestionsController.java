package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Answers;
import com.app.pojo.Questions;
import com.app.service.IAnswersService;
import com.app.service.IQuestionsService;

@RestController
@RequestMapping("/questions")
@CrossOrigin
public class QuestionsController {

	@Autowired
	private IQuestionsService questionService;
	@Autowired
	private IAnswersService answersService;
	
	@GetMapping
	public List<Questions> getAllQuestions()
	{
		List<Questions> allQuestions = questionService.getAllQuestions();
		return allQuestions;
	}
	
	@PostMapping
	public Questions addNewQuestion(@RequestBody Questions question)
	{
		
		return questionService.addNewQuestion(question);
	}
	
	@DeleteMapping("/{id}")
	public void deleteQuestion(@PathVariable Questions id)
	{

		questionService.deleteQuestion(id);
	}
	
	
}
