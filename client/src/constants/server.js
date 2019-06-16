export default (process.env.NODE_ENV === 'production'
  ? 'http://production.com/'
  : 'http://localhost:3001/');
