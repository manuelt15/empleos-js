const jobsListingSection = document.querySelector('.jobs-listings')
const filter = document.querySelector('#filter-location')
const jobs = document.querySelectorAll('.job-listing-card')
const searchImput = document.querySelector('.search-bar input')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

filter.addEventListener('change', function () {
  const selectedValue = filter.value
  

  jobs.forEach(job=> {
    const modalidad = job.dataset.modalidad

    if(selectedValue === '' || selectedValue === modalidad){
        job.style.display = 'flex'
    } else {
        job.style.display = 'none'
    }
  })
})

searchImput.addEventListener('input' , (e)=>{
    e.preventDefault()

    const term = searchImput.value.toLowerCase()
    
    jobs.forEach(job=>{
        const text = job.innerText.toLowerCase()
        job.style.display = text.includes(term) ? 'flex' : 'none'
    })    
})
