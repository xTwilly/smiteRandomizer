package randomizer;

public class Nike extends godClass{ 
    public Nike() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Nike test = new Nike();
    System.out.println(test.getDamageType());
    }
}
