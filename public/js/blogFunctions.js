const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-description').value.trim();

  if (title && description) {
      console.log(title, description);
      const response = await fetch('/api/dashboard', {
          method: 'POST',
          body: JSON.stringify({ title, description }),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.replace('/');
      } else {
          alert('Failed to create new blog.');
      };
  };
};
const blogDeleteHandler = async (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  post_id = event.target.id
  const response = await fetch(`/api/dashboard/${post_id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
  });
  if (response.ok) {
      document.location.replace('/');
  } else {
      alert('Failed to delete blog.');
  };
};

// document.querySelector('.post-form').addEventListener('submit', newBlogHandler);

const buttons = document.querySelectorAll('.delete-btn');

buttons.forEach(button => {
  button.addEventListener('click', blogDeleteHandler);
});
  