import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Waitlist: undefined;
};

type QuizScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Quiz'>;

const QuizScreen = () => {
  const navigation = useNavigation<QuizScreenNavigationProp>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      text: "How old is your child?",
      options: [
        { text: "Under 2 years", value: 1 },
        { text: "2-5 years", value: 2 },
        { text: "6-12 years", value: 3 },
        { text: "13+ years", value: 4 }
      ]
    },
    {
      id: 2,
      text: "How does your child interact with other children?",
      options: [
        { text: "Very well, makes friends easily", value: 1 },
        { text: "Somewhat well, but needs guidance", value: 2 },
        { text: "Struggles with social interactions", value: 3 },
        { text: "Avoids social interactions", value: 4 }
      ]
    },
    {
      id: 3,
      text: "How does your child respond to changes in routine?",
      options: [
        { text: "Adapts easily", value: 1 },
        { text: "Needs some time to adjust", value: 2 },
        { text: "Gets upset but eventually calms down", value: 3 },
        { text: "Has significant difficulty with changes", value: 4 }
      ]
    },
    {
      id: 4,
      text: "Does your child engage in repetitive behaviors?",
      options: [
        { text: "Rarely or never", value: 1 },
        { text: "Sometimes, but not concerning", value: 2 },
        { text: "Frequently, but manageable", value: 3 },
        { text: "Very frequently and disruptive", value: 4 }
      ]
    },
    {
      id: 5,
      text: "How is your child's communication development?",
      options: [
        { text: "Age-appropriate", value: 1 },
        { text: "Slightly delayed", value: 2 },
        { text: "Significantly delayed", value: 3 },
        { text: "Non-verbal or minimal verbal", value: 4 }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let total = 0;
    Object.values(answers).forEach(value => {
      total += value;
    });
    setScore(total);
  };

  const getRecommendation = () => {
    if (score <= 10) {
      return {
        text: "Your child's development appears to be within typical ranges. However, if you have any concerns, we recommend consulting with a pediatrician or developmental specialist.",
        action: "Learn More",
        link: "Home"
      };
    } else if (score <= 15) {
      return {
        text: "Your child may benefit from early intervention services. We recommend scheduling a consultation with our team to discuss your concerns and explore potential support options.",
        action: "Contact Us",
        link: "Waitlist"
      };
    } else {
      return {
        text: "Based on your responses, your child may benefit from ABA therapy services. We strongly recommend scheduling a consultation with our team to discuss your child's specific needs and develop a personalized treatment plan.",
        action: "Contact Us",
        link: "Waitlist"
      };
    }
  };

  const handleAction = () => {
    const recommendation = getRecommendation();
    navigation.navigate(recommendation.link as keyof RootStackParamList);
  };

  const recommendation = getRecommendation();

  return (
    <ScrollView style={styles.container}>
      {!showResults ? (
        <View style={styles.quizContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progress,
                { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
              ]}
            />
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {questions[currentQuestion].text}
            </Text>
            <View style={styles.optionsContainer}>
              {questions[currentQuestion].options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionButton}
                  onPress={() => handleAnswer(option.value)}
                >
                  <Text style={styles.optionText}>{option.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Assessment Results</Text>
          <Text style={styles.resultsText}>{recommendation.text}</Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleAction}
          >
            <Text style={styles.actionButtonText}>{recommendation.action}</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  quizContainer: {
    padding: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 10,
  },
  optionButton: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  resultsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  actionButton: {
    padding: 15,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizScreen; 