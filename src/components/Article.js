function Article({ title, date, preview }) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const defaultDate = date ? new Date(date).toLocaleDateString(undefined, options) : "January 1, 1970";


  
    return (
      <article>
        <h3>{title}</h3>
        <small>{defaultDate}</small>
        <p>{preview}</p>
      </article>
    );
  };

  export default Article;