import { StatusBar } from 'expo-status-bar';
import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Dimensions, PixelRatio, TouchableHighlight, ProgressBarAndroid, Platform } from 'react-native';
import Slider from '@react-native-community/slider';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
//
const normalize = (size) => {
  if (pixelRatio === 2) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    } 
    // iphone 5
    if (deviceHeight < 667) {
      return size;
    // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  } 
  if (pixelRatio === 3) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
        return size;
    }    
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
    // catch in-between size Androids and scale font up
    // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio === 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
        return size;
    // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.20;
    // catch in-between size Androids and scale font up
    // a tad but not too much
    }
    if(deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.40;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size;
}
let time_interval = null; //для прогресса

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'start',
      timer: 0, //Значение прогресса
      time_1: 2, //Время запоминания
      time_2: 15, //Время выполнения
      numbers: [], //Номера с ответами
      answers: [], //Решения, изначально пустые
      task: 0,
      levels: 9, //количество уровней
      variants_count: 12, //количество вариантов ответа
      numbers_count: 5, //количество цифр  в одном ряде
      min_random: 1, //минимальное значение сгенерируемого числа
      max_random: 7, //максимальное значение сгенерируемого числа
      variants: [], //Варианты ответов
      seconds: 0,
      currentAnswer: 0, //Текущий сфокусированный инпут ответа
      result: [],
      correct_count: 0 //Количество правильных ответов
    }
  }

  componentDidMount() {
    this.init()
  }

  levelsChoose = () => {
    this.setState({
      page: 'levels_choose'
    })
  }

  levelsChooseBtns = (level = 0) => {
    switch (level) {
      case 0:
          this.setState({
            page: 'start',
            timer: 0, //Значение прогресса
            time_1: 2, //Время запоминания
            time_2: 15, //Время выполнения
            numbers: [], //Номера с ответами
            answers: [], //Решения, изначально пустые
            task: 0,
            levels: 9, //количество уровней
            variants_count: 12, //количество вариантов ответа
            numbers_count: 4, //количество цифр  в одном ряде
            min_random: 1, //минимальное значение сгенерируемого числа
            max_random: 7, //максимальное значение сгенерируемого числа
            variants: [], //Варианты ответов
            seconds: 0,
            currentAnswer: 0, //Текущий сфокусированный инпут ответа
            result: [],
            correct_count: 0 //Количество правильных ответов
          }, ()=>{
        
            this.init()
            this.taskStart();
          })
        break;

      case 1:
          this.setState({
            page: 'start',
            timer: 0, //Значение прогресса
            time_1: 2, //Время запоминания
            time_2: 15, //Время выполнения
            numbers: [], //Номера с ответами
            answers: [], //Решения, изначально пустые
            task: 0,
            levels: 9, //количество уровней
            variants_count: 12, //количество вариантов ответа
            numbers_count: 5, //количество цифр  в одном ряде
            min_random: 1, //минимальное значение сгенерируемого числа
            max_random: 7, //максимальное значение сгенерируемого числа
            variants: [], //Варианты ответов
            seconds: 0,
            currentAnswer: 0, //Текущий сфокусированный инпут ответа
            result: [],
            correct_count: 0 //Количество правильных ответов
          }, ()=>{
        
            this.init()
            this.taskStart();
          })
        break; 

      case 2:  
          this.setState({
            page: 'start',
            timer: 0, //Значение прогресса
            time_1: 2, //Время запоминания
            time_2: 15, //Время выполнения
            numbers: [], //Номера с ответами
            answers: [], //Решения, изначально пустые
            task: 0,
            levels: 9, //количество уровней
            variants_count: 12, //количество вариантов ответа
            numbers_count: 6, //количество цифр  в одном ряде
            min_random: 1, //минимальное значение сгенерируемого числа
            max_random: 7, //максимальное значение сгенерируемого числа
            variants: [], //Варианты ответов
            seconds: 0,
            currentAnswer: 0, //Текущий сфокусированный инпут ответа
            result: [],
            correct_count: 0 //Количество правильных ответов
          }, ()=>{
        
            this.init()
            this.taskStart();
          })
        break; 

      case 3:  
          this.setState({
            page: 'start',
            timer: 0, //Значение прогресса
            time_1: 2, //Время запоминания
            time_2: 15, //Время выполнения
            numbers: [], //Номера с ответами
            answers: [], //Решения, изначально пустые
            task: 0,
            levels: 9, //количество уровней
            variants_count: 12, //количество вариантов ответа
            numbers_count: 7, //количество цифр  в одном ряде
            min_random: 1, //минимальное значение сгенерируемого числа
            max_random: 7, //максимальное значение сгенерируемого числа
            variants: [], //Варианты ответов
            seconds: 0,
            currentAnswer: 0, //Текущий сфокусированный инпут ответа
            result: [],
            correct_count: 0 //Количество правильных ответов
          }, ()=>{
        
            this.init()
            this.taskStart();
          })
        break; 
    }
  }

  init = () => {
    for (let i = 0; i < (this.state.levels + 1); i++) {
      let line = [], line_sum = [], step = 0, numbers = [], answers = [], result = [];
      for (let i = 0; i < this.state.numbers_count; i++) {
        line.push(this.getRandomIntInclusive(this.state.min_random, this.state.max_random));
      }
      for (let i = 0; i < (this.state.numbers_count - 1); i++) {
        line_sum.push(line[step] + line[step+1]);
        answers.push(0);
        result.push({"test": 1});
        step++;
      }
      numbers.push(line,line_sum);
      this.state.numbers.push(numbers)
      this.state.answers.push(answers)
      this.state.result.push(result)
      this.setState({
        numbers: this.state.numbers,
        answers: this.state.answers,
        result: this.state.result
      })
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startTimer = async (t, nextPressed = 0) =>{
    let timer = nextPressed === 1 ? 0 : this.state.timer, seconds = 0
    const setState = (a, seconds) => {
      this.setState({
        timer: a,
        seconds: seconds
      })
    }
    return new Promise(function(resolve, reject) {
      time_interval = setInterval(() => {
        timer = timer + 1/(t*10)
        seconds = seconds + 10;
        setState(timer, seconds)
        if(timer >= 1) {
          clearInterval(time_interval)
          time_interval = null
          resolve(1)
        }
      }, 100)
    })
  }

  check = () => {
    let correct_count = 0;
    for (let index = 0; index < (this.state.levels + 1); index++) {
      this.state.answers[index].map((l, i)=>{
        if(this.state.numbers[index][1][i] == l) {
          this.state.result[index][i] = {
            'value': l,
            'correct': true,
            'correct_answer': this.state.numbers[index][1][i]
          }
          correct_count++
        } else {
          this.state.result[index][i] = {
            'value': l,
            'correct': false,
            'correct_answer': this.state.numbers[index][1][i]
          }
        }
        this.setState({result: this.state.result})
      })
    }
    this.setState({
      correct_count: correct_count
    }, ()=>{
    })
    //console.log(this.state.result)
  }

  result = () => {
    return this.state.result.map((l, i) => {
      return (<View style={styles.numbersBox} key={i}>{
                l.map((l2, i2) => {
                 return (<Text style={[styles.numberResult,{color: !l2.correct ? '#e74c3c' : '#2ecc71'}]} key={i2}>{l2.value}</Text>)
                })
              }</View>)
    })
  }

  repeat = () => {
    this.setState({
      page: 'start',
      timer: 0, //Значение прогресса
      time_1: 2, //Время запоминания
      time_2: 15, //Время выполнения
      numbers: [], //Номера с ответами
      answers: [], //Решения, изначально пустые
      task: 0,
      levels: 9, //количество уровней
      variants_count: 12, //количество вариантов ответа
      numbers_count: 5, //количество цифр  в одном ряде
      min_random: 1, //минимальное значение сгенерируемого числа
      max_random: 7, //максимальное значение сгенерируемого числа
      variants: [], //Варианты ответов
      seconds: 0,
      currentAnswer: 0, //Текущий сфокусированный инпут ответа
      result: [],
      correct_count: 0 //Количество правильных ответов
    }, ()=>{
      this.init()
    })
  }

  taskStart = (nextPressed = 0) => {
    if(nextPressed == 1 && time_interval) {
      clearInterval(time_interval)
      time_interval = null
    }
    this.setState({
      page: 'task', 
      task: this.state.task + nextPressed
    })
    if(this.state.levels < this.state.task || nextPressed == 1 && this.state.task == this.state.levels) {
      this.check()
      this.setState({
        page: 'finish',
        task: 0,
        timer: 0
      })
      return null;
    }
    this.startTimer(this.state.time_1, nextPressed).then(()=>{
      this.setState({
        page: 'task_sum',
        timer: 0,
        currentAnswer: 0
      })
      this.variantCreate()
      this.startTimer(this.state.time_2).then(()=>{
        this.setState({
          task: this.state.task + 1,
          timer: 0
        }, ()=>{
          this.taskStart();
        })
      })
    })
  }

  numbersLine() {
    if(this.state.task > this.state.levels) return null;
    return this.state.numbers[this.state.task][0].map((l, i) => {
      return (<Text style={styles.number} key={i}>{l}</Text>)
    })
  }

  answers = () => {
    if(this.state.task > this.state.levels) return null;
    return this.state.answers[this.state.task].map((l, i) => {
      return (<TouchableHighlight 
                key={i}
                underlayColor="transparent"
                onPress={() => this.setState({currentAnswer: i})}>
                  <Text style={[styles.numberAnswer, {
                    borderBottomColor: (this.state.currentAnswer === i) ? '#7f8c8d' : ((l == '0') ? '#ecf0f1' : 'black'),
                    color: (this.state.currentAnswer === i) ? '#7f8c8d' : ((l == '0') ? '#ecf0f1' : 'black')
                  }]}>{l}</Text>
              </TouchableHighlight>)
    })
  }

  variantCreate = () => {
    let variants = []
    if(this.state.task > this.state.levels) return null;
    this.state.numbers[this.state.task][1].map((l, i) => {
      let variant_index = this.getRandomIntInclusive(0,(this.state.variants_count-1));
      if(!variants[variant_index]) {
        variants[variant_index] = l
      } else {
        let found = false;
        for (let index = 0; index <= this.state.variants_count-1; index++) {
          if(!variants[index] && !found) {
            found = true;
            variants[index] = l
          }
        }
      }
    })
    for (let i = 0; i < this.state.variants_count; i++) {
      if(!variants[i]) {
        variants[i] = this.getRandomIntInclusive(this.state.min_random*2,this.state.max_random*2)
      }
    }
    this.setState({variants: variants})
    //console.log(variants)
  }

  variantRender = () => {
    return this.state.variants.map((l, i) => {
      return (<TouchableHighlight
                key={i}
                underlayColor="#5cd28e"
                style={styles.variant}
                onPress={() => this.variantPress(l, i)}
              >
                <Text style={styles.variantText} key={i}>{l}</Text>
              </TouchableHighlight>);
    })
  }

  variantPress = (value, key) => {
    this.state.answers[this.state.task][this.state.currentAnswer] = value;
    this.setState({answers: this.state.answers}, ()=>{
      this.setState({
        currentAnswer: (this.state.currentAnswer === (this.state.numbers_count - 2)) ? 0 : (this.state.currentAnswer+1)
      })
    });
  }

  pages = () => {
    switch (this.state.page) {
      case "start":
        return (<Fragment>
                  <Text style={styles.title}>Memory training</Text>
                  <Text style={styles.desc}>You will be given {this.state.numbers_count} numbers(example of the level 'Medium'). Your task is to try to remember them in {this.state.time_1} seconds, then add the first with the second in your mind, and write down the resulting amount; add the second number with the third, write down the amount; etc. Thus, {this.state.numbers_count - 1} amounts should be received and recorded from you. The calculation and execution time is {this.state.time_2} seconds. Then proceed to the next row of numbers</Text>
                  <TouchableHighlight
                    underlayColor="#5cd28e"
                    style={styles.button}
                    onPress={() => this.levelsChoose()}
                  >
                    <Text style={styles.buttonText}>Start</Text>
                  </TouchableHighlight>
                </Fragment>)

      case "levels_choose":
        return (<Fragment>
            <Text style={styles.title}>Select difficulty level</Text>
            <TouchableHighlight
              underlayColor="#f1c40f"
              style={[styles.button,{backgroundColor: '#f1c40f'}]}
              onPress={() => {
                this.levelsChooseBtns(0);
              }}
            >
              <View style={styles.iconText}>
                <Text style={styles.buttonText}>Easy 👶</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#f39c12"
              style={[styles.button,{backgroundColor: '#f39c12'}]}
              onPress={() => {
                this.levelsChooseBtns(1);
              }}
            >
              <View style={styles.iconText}>
                <Text style={styles.buttonText}>Medium 😀</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#e67e22"
              style={[styles.button,{backgroundColor: '#e67e22'}]}
              onPress={() => {
                this.levelsChooseBtns(2);
              }}
            >
              <View style={styles.iconText}>
                <Text style={styles.buttonText}>Hard 🔥</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#e74c3c"
              style={[styles.button,{backgroundColor: '#e74c3c'}]}
              onPress={() => {
                this.levelsChooseBtns(3);
              }}
            >
              <View style={styles.iconText}>
                <Text style={styles.buttonText}>Very hard 🤬🔥</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="#ecf0f1"
                style={styles.buttonShare}
                onPress={() => {
                  this.setState({
                    page: 'start'
                  })
                }}
              >
                <Text style={styles.buttonTextShare}>Back</Text>
            </TouchableHighlight>
          </Fragment>)
      
      case "task":
        return (<Fragment>
                  <Text style={styles.titleLevels}>{this.state.task + 1}/{this.state.levels + 1}</Text>
                  <Text style={styles.title}>Memorize the numbers</Text>
                  <View style={styles.numbersBoxTask}>
                    {this.numbersLine()}
                  </View>
                </Fragment>)

      case "task_sum":
        return (<Fragment>
                  <Text style={styles.titleLevels}>{this.state.task + 1}/{this.state.levels + 1}</Text>
                  <Text style={styles.title}>Enter answers</Text>
                  <View style={styles.numbersBox}>
                    {this.answers()}
                  </View>
                  <View style={styles.numbersBoxVariants}>
                    {this.variantRender()}
                  </View>
                  <TouchableHighlight
                    underlayColor="#7f8c8d"
                    style={styles.buttonNext}
                    onPress={() => this.taskStart(1)}
                  >
                    <Text style={styles.buttonText}>Next</Text>
                  </TouchableHighlight>
                </Fragment>)

      case "finish":
        return (<Fragment>
                  <Text style={styles.title}>Result</Text>
                  <Text style={styles.descEnd}>The number of correct answers - {this.state.correct_count}. The norm of an adult is from {((this.state.numbers_count-1)*10)*0.75} and above</Text>
                  {this.result()}
                  <TouchableHighlight
                    underlayColor="#5cd28e"
                    style={styles.button}
                    onPress={() => this.repeat()}
                  >
                    <Text style={styles.buttonText}>Repeat</Text>
                  </TouchableHighlight>
                </Fragment>)
    
      default:
        break;
    }
  }

  bannerError = (e) => {
    alert(e)
  }

  progressBar = () => {
    if(Platform.OS == 'android') {
      return <ProgressBarAndroid style={styles.slider} styleAttr="Horizontal" color="#e74c3c" indeterminate={false} progress={this.state.timer} />
    } else {
      return <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={this.state.timer}
          disabled={false}
          thumbTintColor="transparent"
          minimumTrackTintColor="#e74c3c"
          maximumTrackTintColor="transparent"
      />
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.pagesBox}>
        {this.progressBar()}
        {this.pages()}
        <StatusBar style="auto" />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numbersBox: {
    flexDirection: 'row',
  },
  numbersBoxTask: {
    flexDirection: 'row',
    paddingTop:10
  },
  numbersBoxVariants: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  number: {
    fontSize: normalize(34),
    color: 'black',
    padding: 5
  },
  numberResult: {
    fontSize: normalize(24),
    color: '#7f8c8d',
    padding: 5
  },
  numberAnswer: {
    fontSize: normalize(34),
    color: '#7f8c8d',
    margin: 5,
    padding: 5,
    borderBottomColor: '#7f8c8d',
    borderBottomWidth: 3
  },
  pagesBox: {
    flex: 1,
    padding: 15,
    paddingTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    top: 0,
    position: 'absolute',
    width: '100%', 
    height: Platform.OS == 'android' ? 4 : 2,
    zIndex: 1000,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: normalize(28),
    textAlign: 'center',
    padding: 15,
  },
  titleLevels: {
    fontSize: normalize(28),
    textAlign: 'center',
    padding: 15,
    color: '#7f8c8d',
  },
  desc: {
    fontSize: normalize(14),
    textAlign: 'center',
    padding: 15
  },
  descEnd: {
    fontSize: normalize(14),
    textAlign: 'center',
    padding: 15,
    paddingTop: 0
  },
  button: {
    backgroundColor: '#2ecc71',
    borderRadius: 30,
    width: '50%',
    margin: 15
  },
  buttonShare: {
    backgroundColor: '#ecf0f1',
    borderRadius: 30,
    width: '50%',
    margin: 15,
    marginBottom: 0
  },
  buttonTextShare: {
    fontSize: normalize(16),
    fontWeight: '500',
    textAlign: 'center',
    padding: 15,
    color: '#34495e'
  },
  buttonNext: {
    backgroundColor: '#bdc3c7',
    borderRadius: 30,
    width: '50%',
    margin: 15,
    marginTop: 30
  },
  variant: {
    backgroundColor: '#2ecc71',
    borderRadius: 25,
    width: 50,
    height: 50,
    margin: 10
  },
  variantText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  buttonText: {
    fontSize: normalize(16),
    fontWeight: '500',
    textAlign: 'center',
    padding: 15,
    color: 'white'
  }
});
