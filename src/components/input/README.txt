-------------------------reusable inputs--------------------------------------------------------------------------------------------------------------------------


------input styles--------------

-------- input--default--solid          // default input
-------- input--border--solid           // input with black border, border radius is none
-------- input--borderRounded--solid    // input with black border and border radius
-------- input--default--outline        // input without border(borer is white) and border radius
-------- input--border--outline         // input with gray border, border radius is none
-------- input--borderRounded--outline                // input with gray border and border raidus
-------- input--default--borderRounded--outline       // input without border(birder is white) and with borer radius

------inputs sizes-------------------

-------- input--default     // width: 100%
-------- input--small       // width: 320px


------------example of input----------------------------------------------------------------------------------------------------------------------------------------

<Inputs type="text" inputStyle="input--default--solid" inputSize="input--default"></Inputs>


------------at input can be-----------------------------------------------------------------------------------------------------------------------------------------

------- type,
------- onChange,
------- placeholder,
------- value,
------- name,
------- inputStyle,
------- inputSize,



--------------example of input with all properties------------------------------------------------------------------------------------------------------------------

<Inputs type="text" inputStyle="input--default--solid" inputSize="input--default" onChange={onChange} value={value} name="name" placeholder=""placeholder></Inputs>