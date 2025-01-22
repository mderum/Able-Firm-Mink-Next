import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Question = (props) => {
  return (
    <>
      <div className="question-container">
        <span className="question-text1 heading4">{props.question}</span>
        <span className="question-text2">{props.answer}</span>
      </div>
      <style jsx>
        {`
          .question-container {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .question-text1 {
            font-weight: 700;
            line-height: 1.6;
          }
          .question-text2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
        `}
      </style>
    </>
  )
}

Question.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question
