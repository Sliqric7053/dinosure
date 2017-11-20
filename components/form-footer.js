export default ({ step, of: total }) =>
  <section>
    <div className='container'>
      <div className='columns'>
        <div className='column' />
        <div className='column'>
          <div className='has-text-centered is-4'>Step {step} of {total}</div>
          <progress className='progress is-small is-info' value='15' max='100'>{Math.round(step / total * 100) | 0}%</progress>
        </div>
        <div className='column' />
      </div>
    </div>
  </section>;
