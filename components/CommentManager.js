import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CommentManager = ({ cityName,onCommentsChange  }) => {
  
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    loadComments();
  }, [cityName]);

  const loadComments = async () => {
    try {
      const storedComments = await AsyncStorage.getItem(`${cityName}Comments`);
      if (storedComments !== null) {
        const parsedComments = JSON.parse(storedComments);
        setComments(parsedComments);
        if (onCommentsChange) {
          onCommentsChange(parsedComments);
        }
        console.log(`Yorumlar yüklendi:`, parsedComments);
      } else {
        console.log(`${cityName} için yorum bulunamadı`);
      }
    } catch (error) {
      console.error('Yorumlar yüklenirken bir hata oluştu:', error);
    }
  };

  const saveComments = async (commentsToSave) => {
    try {
      await AsyncStorage.setItem(`${cityName}Comments`, JSON.stringify(commentsToSave));
      //setComments(newComments);
    } catch (error) {
      console.error('Yorumlar kaydedilirken bir hata oluştu:', error);
    }
  };

  const addComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    saveComments(updatedComments);
    if (onCommentsChange) {
      onCommentsChange(updatedComments);
    }
  };
  // const addComment = () => {
  //   if (inputText.trim() !== ''){  
  //     const newComment = { id: Date.now().toString(),name: fullName,username: username, text: inputText,date: new Date().toLocaleString()};
  //     const newComments = [...comment, newComment];
  //     setComment(newComments);
  //     saveComments(newComments);
  //     setInputText('');
  //   }
  // }

  const deleteComment = (id) => {
    const filteredComments = comments.filter(comment => comment.id !== id);
    setComments(filteredComments);
    saveComments(filteredComments);
    if (onCommentsChange) {
      onCommentsChange(filteredComments);
    }
  };
  // const deleteComment = (id) => {
  //   const filteredComments = comment.filter(c => c.id !== id);
  //   setComment(filteredComments);
  //   saveComments(filteredComments);
  // };

  const clearComments  = async () => {
    try {
      await AsyncStorage.removeItem(`${cityName}Comments`);
      setComments([]);
      if (onCommentsChange) {
        onCommentsChange([]);
      }
      console.log(`${cityName} yorumları temizlendi`);
    } catch (error) {
      console.error('Yorumlar temizlenirken bir hata oluştu:', error);
    }
  };

  return {
    comments,
    addComment,
    deleteComment,
    clearComments,
  };
};

export default CommentManager;
