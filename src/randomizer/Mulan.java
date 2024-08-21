package randomizer;

public class Mulan extends godClass{ 
    public Mulan() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Mulan test = new Mulan();
    System.out.println(test.getDamageType());
    }
}
