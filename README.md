# EvaluateNewsArticlewNLP
 
## Overview
This project represents a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. 
NLP is the ability of an application to understand the human language, written or oral.

For the NLP part, I used an external API from MeaningCloud called Sentiment Analysis.
Sentiment Analysis is MeaningCloud's solution for performing a detailed multilingual sentiment analysis of texts from different sources.

It identifies the positive, negative, neutral polarity in any text, including comments in surveys and social media. It also extracts sentiment at the document or aspect-based level. 
In order to do this, the local polarity of the different sentences in the text is identified and the relationship between them evaluated, resulting in a global polarity value for the whole text.

Differentiators:

It extracts aspect-based sentiment.
It distinguishes facts and opinions.
It detects irony and polarity disagreement.
Users can define their own dictionaries and detect sentiment of the elements included.
Users can define their own sentiment model to adapt the analysis to their subdomain.


## Instructions
In order to test the project, the scripts: 'start', 'build-prod', 'build-dev' and 'testj' from the package.json file need to be run with npm

##List of what software, firmware and hardware you may require
Webpack, express and jest are used. For the plugins, you can find the full list on the devDependencies list, in the package.json file. 

##List of files included in the project css folder fonts folder javascript folder index filereadme file
Folder sttucture:__test__, .babelrc,.env, src folder,.gitignore, package.json, package-lock.json, readme.md, webpack.dev.js, webpack.prod.js

##Acknowledgements and credits for any resources or blogs that helped you create the project 
Resources:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
Udacity
