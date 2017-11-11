import React, { Component } from 'react'

/**
 * This couuld be a Stateless Functional Conponent, this is a function like thie:
 * function LsitContacts(props) {
 *   return('INSIDE-THE-COMPONENT-TO-RENDER')
 * }
 */

export class ListContacts extends Component {
    /* We add the contacts to the state of the component so it changes while the
    state changes */

    render() {
        return (
            <ol className="contact-list">
                {
                    this.props.contacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>                                
                                <p>{contact.email}</p>                                
                            </div>
                            <button                                 
                                className='contact-remove'
                            >
                                Remove
                            </button>

                        </li>
                    ))
                } 
            </ol>
        )
    }
}

export default ListContacts