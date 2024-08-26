package randomizer;
import java.util.Map;
import java.util.HashMap;

public  class godClass{
    protected String role;
    protected String damageType;
    protected String gameDefinedClass;
    protected String name;

    public godClass(String role, String damageType, String gameDefinedClass, String name){
        super();
        this.role = role;
        this.damageType = damageType;
        this.gameDefinedClass = gameDefinedClass;
        this.name = name;
    }
    public godClass() {
    	super();
    }
    //setters
    public void setRole(String newRole){
        this.role = newRole;
    }
    public void setDamageType(String newDamageType){
        this.damageType = newDamageType;
    }
    public void setGameDefinedClass(String newGameDefinedClass){
        this.gameDefinedClass = newGameDefinedClass;
    }
    public void setName(String newName) {
    	this.name = newName;
    }
    
    //getters
    public String getRole(){
        return this.role;
    }
    public String getDamageType(){
        return this.damageType;
    }
    public String getGameDefinedClass(){
        return this.gameDefinedClass;
    }
    public String getName() {
    	return this.name;
    }


/*public static void main(String[] args) {
	godClass test = new godClass("Solo", "Magical", "Warrior");
	System.out.println(test.getGameDefinedClass());
	HashMap<Integer, String> map = new HashMap<Integer, String>();
	map.put(1, "car");
	} */
}
