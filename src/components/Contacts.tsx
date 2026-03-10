
const Contacts = () => {
  return (
    <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-icon lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-circle btn-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
        </button>

        {/* buttons that show up when FAB is open */}
        <div className="tooltip" data-tip="phngthanhsang@gmail.com">
            <button onClick={() => {navigator.clipboard.writeText("phngthanhsang@gmail.com")}} className="btn btn-lg btn-circle btn-accent">
                <i className="ci ci-gmail ci-2x"></i>
            </button>
        </div>
        <div className="tooltip" data-tip="Github">
            <a href="https://github.com/Shovul" target="_blank" className="btn btn-lg btn-circle btn-accent">
                <i className="ci-2x ci-github"></i>
            </a>
        </div>
        <div className="tooltip" data-tip="Linkedin">
            <a href="https://www.linkedin.com/in/pham-nguyen-thanh-sang-5998a0362/" target="_blank" className="btn btn-lg btn-circle btn-accent">
                <i className="ci ci-linkedin ci-2x"></i>
            </a>
        </div>
        <div className="tooltip" data-tip="Facebook">
            <a href="https://www.facebook.com/thatstheSang" target="_blank" className="btn btn-lg btn-circle btn-accent">
                <i className="ci ci-facebook ci-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Contacts
