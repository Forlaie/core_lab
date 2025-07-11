import React from 'react'

const About = () => {
  return (
    <section className='px-30 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>Welcome to CORE Lab!</h1>
        <p className='pt-2'>
            Welcome to the CORE Lab (COmputational Research and Education)!
        </p>
        <p className='pt-2'>
            Here, we're primarily focused on computer science education research, investigating and improving how people learn, teach, and engage with computing.
            Our research spans pedagogical strategies, assessment design, student experience, and more, all with a goal of improving CS education!
        </p>
        <p className='pt-2'>
            Our team includes faculty, graduate students, and undergrads from diverse academic backgrounds.
            Our members are not only highly accomplished researchers, but also genuinely fun people <i>(yes, you can be both!)</i>.
        </p>
    </section>
  )
}

export default About