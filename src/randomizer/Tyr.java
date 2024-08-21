package randomizer;

public class Tyr extends godClass{ 
    public Tyr() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Tyr test = new Tyr();
    System.out.println(test.getDamageType());
    }
}
