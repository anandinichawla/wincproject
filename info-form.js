import React from 'react'





const InfoForm = (props) => (

	<section id="info-form">
        <span> Women in X Directory </span>
        <section>
            <form method="post" action="#">
                <table>
                    <tr>
						<td><label htmlFor="name">Name</label></td>
                        <td><input type="text" name="name" id="name"/></td>
                    </tr> 

                    <tr>
                        <td><label htmlFor="title/position">Title/Position</label></td> 
                        <td><input type="text" name="title" id="title" class="info-box" /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="name">Pronoun</label></td>
                        <td><input type="text" name="Pronoun" id="Pronoun" class="info-box"/></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="email">Email</label></td> 
                        <td><input type="email" name="email" id="email" class="info-box"/></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="name"> What languages can you speak in </label> </td>
                        <td><input type="text" name="language" id="language" class="info-box"/></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="twitter">Twitter</label></td>
                        <td><input type="text" name="twitter" id="twitter" class="info-box"/></td>
                    </tr>  

                    <tr>
                        <td><label htmlFor="linkedin">Linkedin</label></td>
                        <td><input type="text" name="linkedin" id="linkedin" class="info-box"/></td>
                    </tr>         

                    <tr>
                        <td><label htmlFor="message">Why is diversity and inclusion important to you? </label></td>
                        <td><textarea name="message-diversity" id="message-diversity" class="text-box" rows="10" cols="15"></textarea></td>
                    </tr>

                    <tr>            
                        <td><label htmlFor="message">What do you specialize in? </label> </td>
                        <td><textarea name="message-specialize" id="specialize" class="text-box" rows="10" cols="15"></textarea></td>
                    </tr>
            
                    <tr>
                        <td><label htmlFor="message">Do  you have past speaking slides, papers or conference experience? </label> </td>
                        <td> <textarea name="message-specialize" id="specialize" class="text-box" rows="10" cols="15"></textarea></td>
                    </tr>

                    <tr>    
                        <td><label htmlFor="mentor">Are you interested in mentoring? </label></td>
                        <td><input type="text" name="mentor" id="mentor" class="info-box"/></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="location">Where are you located? </label></td>
                        <td><input type="text" name="location" id="location" class="info-box"/></td>
                    </tr>

                </table>
                <div class="actions">
                    <label htmlFor= "actions"> </label>
                    <input type="submit" value="Submit" id="special"/>
                </div>
            </form>
        </section>
    </section>
     
)

export default InfoForm

	