import { Author, Book } from "../model/model.js";

async function createSampleData() {
  const ronan = await Author.create({ 
    name: "Ronan The Best", 
    birthYear: 1990 
  });
  
  const kim = await Author.create({ 
    name: "Kim Ang", 
    birthYear: 1995 
  });
  
  const hok = await Author.create({ 
    name: "Hok Tim", 
    birthYear: 2015 
  });

  await Book.create({ 
    title: "Ronan's First Book", 
    publicationYear: 2010, 
    pages: 150, 
    authorId: ronan.id 
  });

  await Book.create({ 
    title: "Ronan's Second Book", 
    publicationYear: 2015, 
    pages: 220, 
    authorId: ronan.id 
  });

  await Book.create({ 
    title: "Kim Ang's First Book", 
    publicationYear: 2018, 
    pages: 300, 
    authorId: kim.id 
  });

  await Book.create({ 
    title: "Kim Ang's Second Book", 
    publicationYear: 2020, 
    pages: 280, 
    authorId: kim.id 
  });

  await Book.create({ 
    title: "Hok Tim's First Book", 
    publicationYear: 2022, 
    pages: 100, 
    authorId: hok.id 
  });

  await Book.create({ 
    title: "Hok Tim's Second Book", 
    publicationYear: 2023, 
    pages: 130, 
    authorId: hok.id 
  });
}

createSampleData().catch(console.error);
