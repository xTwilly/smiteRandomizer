package randomizer;
import java.util.Map;
import java.util.HashMap;

public  class godClass{
    protected String role;
    protected String damageType;
    protected String gameDefinedClass;

    public godClass(String role, String damageType, String gameDefinedClass){
        super();
        this.role = role;
        this.damageType = damageType;
        this.gameDefinedClass = gameDefinedClass;
    }
    public godClass() {
    	super();
    }
    public void setRole(String newRole){
        this.role = newRole;
    }
    public void setDamageType(String newDamageType){
        this.damageType = newDamageType;
    }
    public void setGameDefinedClass(String newGameDefinedClass){
        this.gameDefinedClass = newGameDefinedClass;
    }

    public String getRole(){
        return this.role;
    }
    public String getDamageType(){
        return this.damageType;
    }
    public String getGameDefinedClass(){
        return this.gameDefinedClass;
    }


public static void main(String[] args) {
	godClass test = new godClass("Solo", "Magical", "Warrior");
	System.out.println(test.getGameDefinedClass());
	HashMap<Integer, String> map = new HashMap<Integer, String>();
	map.put(1, "car");
	}
}
