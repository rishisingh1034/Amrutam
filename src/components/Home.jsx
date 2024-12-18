import homeImg from "/src/assets/homeimg.svg"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen" id="home">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60 z-10" />

      <div className="relative z-20 px-6 py-12 md:px-12 lg:py-24 max-w-4xl">
        <p className="text-gray-300 mb-4">
          Namaste, Welcome to Amrutam
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Step into Holistic Healing with{' '}
          <span className="underline decoration-2 underline-offset-4">
            Ayurveda
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-6">
          Book Consultation With Certified Experts.
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl text-lg">
          Dive into the world of ayurveda and experience personalized health solutions and
          holistic guidance from trusted ayurvedic doctors anytime, anywhere.
        </p>
        <button
          className="btn-primary p-3"
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  )
}