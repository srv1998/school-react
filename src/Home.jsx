import React from 'react';

const Home=()=>{
    return(
        <div className="body">
            <aside className="body-aside">
                <div id="photo-cover"><img src="/images/lady-img.jpg" alt=""/></div>
                <p>Hello admin!</p>
                <h1>Akhil</h1>
                
                <table id="aside-table" >
                    <tr>
                        <td><i class="fas fa-user-graduate"></i></td>
                        <td>Student</td>
                        <td><select name="student" id="student"></select></td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-chalkboard-teacher"></i></td>
                        <td>Teacher</td>
                        <td><select name="teacher" id="teacher"></select></td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-box"></i></td>
                        <td>Gallery</td>
                    </tr>
                    <tr>
                        <td><i class="fas fa-folder-open"></i></td>
                        <td>Timetable</td>
                    </tr>
                    <tr>
                        <td><i class="fa fa-calendar" aria-hidden="true"></i></td>
                        <td>Exams</td>
                        <td><select name="teacher" id="teacher"></select></td>
                    </tr>
                    <tr>
                    <td><i class="fas fa-book"></i></td>
                        <td>Syllabus</td>
                    </tr>
                    <tr>
                    <td><i class="fas fa-list"></i></td>
                        <td>CalenderEvent</td>
                        <td><select name="teacher" id="teacher"></select></td>
                    </tr>
                </table>
                <button id="aside-button" className="btn btn-primary "><i class="fa fa-search" aria-hidden="true"></i> Search</button>
            </aside>
            <div className="main">
               <header className="main-header one-edge-shadow">SHRI JI BABA PUBLIC SCHOOL <span className="text-muted"><i class="fas fa-tools"></i></span></header>
                <div className="main-body">
                     <p> Dashboard &nbsp; <strong>&gt;</strong> &nbsp; Events &nbsp; <strong>&gt;</strong> &nbsp; Events List </p>
                     <div id="add-event">+ Add new Event</div>
                     <h2>Event List</h2>
                     <table id="main-table">
                         <tbody>
                             <tr>
                                <td>Class</td>
                                  <td>
                                  <select  style={{width:'70%',border:'none'}} className="text-muted">
                                    <option>Math
                                    </option>
                                    <option>Medium lenght
                                    </option>
                                    <option>Much much much longer text not fitting when resizing
                                    </option>
                                  </select>
                            </td>
                                </tr>
                             <tr>
                                 <td>Events</td>
                                 <td id="radio-input">
                                    
                                     <input type="radio" name="events"/>
                                     <label>  &nbsp; Upcoming</label>
                                     &nbsp;
                                     &nbsp;
                                     &nbsp;
                                     &nbsp;
                                     <input type="radio" name="events"/>
                                     <label >  &nbsp; past Due</label>
                                     &nbsp;
                                     &nbsp;
                                     &nbsp;
                                     &nbsp;
                                     <input type="radio" name="events"/>
                                     <label >  &nbsp; All</label>
                                     &nbsp;
                                     &nbsp;
                                     &nbsp;
                                     &nbsp;
                                     <input type="radio" name="events"/>
                                     <label >  &nbsp; Custom date</label>
                                 </td>
                                
                             </tr>
                             <tr>
                                 <td>Date</td>
                                 <td><input type="date" className="text-muted" placeholder="type here"/></td>
                             </tr>
                             <tr>
                                 <td>Search Text</td>
                                 <td><input type="text"/></td>
                                 <td><button className="table-button btn  btn-block">Search</button></td>
                                 <td><button className="table-button btn  btn-block">Reset</button></td>
                             </tr>
                             <tr>
                                 <td> </td>
                                 <td colSpan="3">
                                     <div id="chart">
                                         <table >
                                             <thead>
                                                 <td>#</td>
                                                 <td>from date</td>
                                                 <td>to date</td>
                                                 <td>attachment</td>
                                                 <td>description</td>
                                                 <td>option</td>
                                                
                                             </thead>
                                             <tbody className="text-muted">
                                                 <tr>
                                                 <td>#</td>
                                                 <td>from date</td>
                                                 <td>to date</td>
                                                 <td>attachment</td>
                                                 <td>description</td>
                                                 <td>option</td>
                                                 </tr>
                                                 <tr>
                                                 <td>#</td>
                                                 <td>from date</td>
                                                 <td>to date</td>
                                                 <td>attachment</td>
                                                 <td>description</td>
                                                 <td>option</td>
                                                 </tr>
                                                 <tr>
                                                 <td colSpan="6" style={{textAlign:'center',color:'black'}} >show more</td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </div>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
            </div>

        </div>
    );
}

export default Home;