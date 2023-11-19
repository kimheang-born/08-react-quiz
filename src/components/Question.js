import Options from './Options';

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question?.question || 'No question'}</h4>

      <Options question={question} />
    </div>
  );
}

export default Question;
