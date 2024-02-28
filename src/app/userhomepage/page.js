'use client'
import { useState } from "react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Page() {
  

    return (
      <div className="container mx-auto p-4">
      <div className="profile">
        {/* Other profile elements (avatar, bio, etc.) */}
        
        <div className="tabs mt-4">
          <button 
            onClick={() => setActiveTab('Contributions')}
            className={`tab-button ${activeTab === 'Contributions' ? 'active' : ''}`}
          >
            Contributions
          </button>
          {/* Add more tabs as needed */}
        </div>

        {activeTab === 'Contributions' && (
          <div className="contributions p-4">
            {/* Replace with actual contributions data */}
            Contributions data goes here.
          </div>
        )}

        {/* Other tab content */}
      </div>

      <div className="pinned-repos mt-4 grid grid-cols-2 gap-4">
        {/* Example of a pinned repo item */}
        <div className="repo bg-gray-100 p-4 rounded-md">
          <h3>Repo Name</h3>
          <p>Username: maxmuller23</p>
          {/* Replace with actual email */}
          <p>Email: maxmulla23@example.com</p>
        </div>

        {/* Add more pinned repos as needed */}
      </div>
    </div>
    )
}